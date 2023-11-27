// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-south-2", // Reemplaza 'tu-region' con la región de SES, por ejemplo, 'us-east-1'
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  const params = {
    Destination: {
      ToAddresses: ["albertossc@gmail.com"], // Reemplaza con tu dirección de correo electrónico
    },
    Message: {
      Body: {
        Text: {
          Data: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        },
      },
      Subject: { Data: "Nuevo mensaje de contacto" },
    },
    Source: "albertossc@gmail.com", // Reemplaza con tu dirección de correo electrónico verificada en SES
  };

  try {
    await ses.sendEmail(params).promise();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
