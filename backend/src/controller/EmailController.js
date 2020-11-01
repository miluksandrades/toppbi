const mailer = require('nodemailer')

module.exports = {
    async index(req, res) {
        //var nome = 'Lucas';
        const {
            link,
            voalle,
            anm,
            dude,
            c3x,
            smartolt,
            smartomni,
            smartmaps,
            responsavel
        } = req.body;

        var color1, color2, color3, color4, color5, color6, color7, color8;

        if (link === 'OK') {
            color1 = 'green';
        } else {
            color1 = 'red';
        }

        if (voalle === 'OK') {
            color2 = 'green';
        } else {
            color2 = 'red';
        }

        if (anm === 'OK') {
            color3 = 'green';
        } else {
            color3 = 'red';
        }

        if (dude === 'OK') {
            color4 = 'green';
        } else {
            color4 = 'red';
        }

        if (c3x === 'OK') {
            color5 = 'green';
        } else {
            color5 = 'red';
        }

        if (smartolt === 'OK') {
            color6 = 'green';
        } else {
            color6 = 'red';
        }

        if (smartomni === 'OK') {
            color7 = 'green';
        } else {
            color7 = 'red';
        }

        if (smartmaps === 'OK') {
            color8 = 'green';
        } else {
            color8 = 'red';
        }

        template = "<body>" +
            "<p>Os sistemas da TOPPNET encontram-se na seguite situação:</p>" +
            "<table>" +
            "<thead>" +
            "<tr>" +
            "<th>SERVIÇO</th>" +
            "<th></th>" +
            "<th>STATUS</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr>" +
            "<td style='padding: 5px'>LINK</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color1}; padding: 5px; color: #fff; text-align: center">${link}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>VOALLE</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color2}; padding: 5px; color: #fff; text-align: center">${voalle}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>ANM2000</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color3}; padding: 5px; color: #fff; text-align: center">${anm}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>DUDE</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color4}; padding: 5px; color: #fff; text-align: center">${dude}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>3CX</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color5}; padding: 5px; color: #fff; text-align: center">${c3x}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>SMARTOLT</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color6}; padding: 5px; color: #fff; text-align: center">${smartolt}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>SMARTOMNI</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color7}; padding: 5px; color: #fff; text-align: center">${smartomni}</div></td>` +
            "</tr>" +
            "<tr>" +
            "<td style='padding: 5px'>SMARTMAPS</td>" +
            "<td style='padding: 5px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
            `<td><div style="background: ${color8}; padding: 5px; color: #fff; text-align: center">${smartmaps}</div></td>` +
            "</tr>" +
            "</tbody>" +
            "</table>";

        const smtpTransport = mailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, //SSL/TLS
            auth: {
                user: '*****',
                pass: '*********'
            }
        });

        const mail = {
            from: `${responsavel} <lucasnoctoppnet@gmail.com>`,
            to: "lucasnoctoppnet@gmail.com",
            subject: "STATUS SISTEMAS",
            text: 'mensagem',
            html: template
        }

        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return res.send('Ok')
            })
            .catch(error => {
                smtpTransport.close();
                return res.json(error);
            });
    }
}
