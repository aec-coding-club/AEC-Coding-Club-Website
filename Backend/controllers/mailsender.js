"use strict";
const nodemailer = require("nodemailer");

async function sendOTP(email, otp) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object

  let info = await transporter.sendMail({
    from: `"AEC Coding Club" <${process.env.MAIL_USER}>`, // sender address
    to: `${email}`, // list of receivers
    subject: "OTP for AEC Coding Club Registration", // Subject line
    html: `<style>
    p {
        margin: 10px 0;
        padding: 0;
    }

    table {
        border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        display: block;
        margin: 0;
        padding: 0;
    }

    img,
    a img {
        border: 0;
        height: auto;
        outline: none;
        text-decoration: none;
    }

    body,
    #bodyTable,
    #bodyCell {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .mcnPreviewText {
        display: none !important;
    }

    #outlook a {
        padding: 0;
    }

    img {
        -ms-interpolation-mode: bicubic;
    }

    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }

    .ReadMsgBody {
        width: 100%;
    }

    .ExternalClass {
        width: 100%;
    }

    p,
    a,
    li,
    td,
    blockquote {
        mso-line-height-rule: exactly;
    }

    a[href^=tel],
    a[href^=sms] {
        color: inherit;
        cursor: default;
        text-decoration: none;
    }

    p,
    a,
    li,
    td,
    body,
    table,
    blockquote {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
        line-height: 100%;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .templateContainer {
        max-width: 600px !important;
    }

    a.mcnButton {
        display: block;
    }

    .mcnImage {
        vertical-align: bottom;
    }

    .mcnTextContent {
        word-break: break-word;
    }

    .mcnTextContent img {
        height: auto !important;
    }

    .mcnDividerBlock {
        table-layout: fixed !important;
    }

    body,
    #bodyTable {
        background-color: #384447;
    }

    #bodyCell {
        border-top: 0;
    }

    h1 {
        color: #202020;
        font-family: Georgia;
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        line-height: 125%;
        letter-spacing: normal;
        text-align: left;
    }

    h2 {
        color: #202020;
        font-family: Helvetica;
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        line-height: 150%;
        letter-spacing: normal;
        text-align: center;
    }

    h3 {
        color: #989898;
        font-family: Helvetica;
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        line-height: 150%;
        letter-spacing: normal;
        text-align: center;
    }

    h4 {
        color: #202020;
        font-family: Helvetica;
        font-size: 18px;
        font-style: normal;
        font-weight: bold;
        line-height: 200%;
        letter-spacing: normal;
        text-align: center;
    }

    #templatePreheader {
        background-color: #EAE2B7;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 9px;
        padding-bottom: 9px;
    }

    #templatePreheader .mcnTextContent,
    #templatePreheader .mcnTextContent p {
        color: #656565;
        font-family: Helvetica;
        font-size: 12px;
        line-height: 150%;
        text-align: left;
    }

    #templatePreheader .mcnTextContent a,
    #templatePreheader .mcnTextContent p a {
        color: #656565;
        font-weight: normal;
        text-decoration: underline;
    }

    #templateHeader {
        background-color: #dff0f4;
        background-image: url("https://gallery.mailchimp.com/ed526b2f15f645fc575e0db76/_compresseds/24d9180b-aefe-4a3a-90dc-8c097d9a5f2c.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 80px;
        padding-bottom: 90px;
    }

    #templateHeader .mcnTextContent,
    #templateHeader .mcnTextContent p {
        color: #202020;
        font-family: Helvetica;
        font-size: 18px;
        line-height: 150%;
        text-align: left;
    }

    #templateHeader .mcnTextContent a,
    #templateHeader .mcnTextContent p a {
        color: #202020;
        font-weight: normal;
        text-decoration: underline;
    }

    #templateBody {
        background-color: #EAE2B7;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 80px;
        padding-bottom: 50px;
    }

    #templateBody .mcnTextContent,
    #templateBody .mcnTextContent p {
        color: #666666;
        font-family: Georgia;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
    }

    #templateBody .mcnTextContent a,
    #templateBody .mcnTextContent p a {
        color: #999999;
        font-weight: normal;
        text-decoration: underline;
    }

    #templateColumns {
        background-color: #e8eff1;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 100px;
        padding-bottom: 50px;
    }

    #templateColumns .columnContainer .mcnTextContent,
    #templateColumns .columnContainer .mcnTextContent p {
        color: #202020;
        font-family: Helvetica;
        font-size: 16px;
        line-height: 200%;
        text-align: center;
    }

    #templateColumns .columnContainer .mcnTextContent a,
    #templateColumns .columnContainer .mcnTextContent p a {
        color: #202020;
        font-weight: normal;
        text-decoration: underline;
    }

    #templateFooter {
        background-color: #384447;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    #templateFooter .mcnTextContent,
    #templateFooter .mcnTextContent p {
        color: #FFFFFF;
        font-family: Helvetica;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
    }

    #templateFooter .mcnTextContent a,
    #templateFooter .mcnTextContent p a {
        color: #FFFFFF;
        font-weight: normal;
        text-decoration: underline;
    }

    @media only screen and (min-width:768px) {
        .templateContainer {
            width: 600px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        body,
        table,
        td,
        p,
        a,
        li,
        blockquote {
            -webkit-text-size-adjust: none !important;
        }
    }

    @media only screen and (max-width: 480px) {
        body {
            width: 100% !important;
            min-width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .columnWrapper {
            max-width: 100% !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnImage {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnCartContainer,
        .mcnCaptionTopContent,
        .mcnRecContentContainer,
        .mcnCaptionBottomContent,
        .mcnTextContentContainer,
        .mcnBoxedTextContentContainer,
        .mcnImageGroupContentContainer,
        .mcnCaptionLeftTextContentContainer,
        .mcnCaptionRightTextContentContainer,
        .mcnCaptionLeftImageContentContainer,
        .mcnCaptionRightImageContentContainer,
        .mcnImageCardLeftTextContentContainer,
        .mcnImageCardRightTextContentContainer,
        .mcnImageCardLeftImageContentContainer,
        .mcnImageCardRightImageContentContainer {
            max-width: 100% !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnBoxedTextContentContainer {
            min-width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupContent {
            padding: 9px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnCaptionLeftContentOuter .mcnTextContent,
        .mcnCaptionRightContentOuter .mcnTextContent {
            padding-top: 9px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnImageCardTopImageContent,
        .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
        .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
            padding-top: 18px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnImageCardBottomImageContent {
            padding-bottom: 9px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupBlockInner {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcnImageGroupBlockOuter {
            padding-top: 9px !important;
            padding-bottom: 9px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnTextContent,
        .mcnBoxedTextContentColumn {
            padding-right: 18px !important;
            padding-left: 18px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnImageCardLeftImageContent,
        .mcnImageCardRightImageContent {
            padding-right: 18px !important;
            padding-bottom: 0 !important;
            padding-left: 18px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .mcpreview-image-uploader {
            display: none !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        h1 {
            font-size: 22px !important;
            line-height: 125% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        h2 {
            font-size: 20px !important;
            line-height: 125% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        h3 {
            font-size: 18px !important;
            line-height: 125% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        h4 {
            font-size: 16px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mcnBoxedTextContentContainer .mcnTextContent,
        .mcnBoxedTextContentContainer .mcnTextContent p {
            font-size: 14px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        #templatePreheader {
            display: block !important;
        }
    }

    @media only screen and (max-width: 480px) {

        #templatePreheader .mcnTextContent,
        #templatePreheader .mcnTextContent p {
            font-size: 14px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        #templateHeader .mcnTextContent,
        #templateHeader .mcnTextContent p {
            font-size: 16px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        #templateBody .mcnTextContent,
        #templateBody .mcnTextContent p {
            font-size: 16px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        #templateColumns .columnContainer .mcnTextContent,
        #templateColumns .columnContainer .mcnTextContent p {
            font-size: 16px !important;
            line-height: 150% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        #templateFooter .mcnTextContent,
        #templateFooter .mcnTextContent p {
            font-size: 14px !important;
            line-height: 150% !important;
        }
    }
</style>
<center>
    <table id="bodyTable"
        style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 0; width: 100%; background-color: #384447;"
        border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <td id="bodyCell"
                    style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 0; width: 100%; border-top: 0;"
                    align="center" valign="top">
                    <!-- BEGIN TEMPLATE // -->
                    <table style="border-collapse: collapse; text-size-adjust: 100%; height: 455px; width: 100%;"
                        border="0" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr style="height: 120px;">
                                <td id="templatePreheader"
                                    style="background: none center center / cover no-repeat #EAE2B7; text-size-adjust: 100%; border-top: 0px; border-bottom: 0px; padding-top: 9px; padding-bottom: 9px; height: 120px;"
                                    align="center" valign="top">
                                    <img src="https://res.cloudinary.com/sahebcloud/image/upload/v1644690142/AECCC_kamvut.png" alt="aeccc logo"
                                        width="319" height="118">
                                </td>
                            </tr>
                            <tr style="height: 284px;">
                                <td id="templateHeader"
                                    style="background: url('https://gallery.mailchimp.com/ed526b2f15f645fc575e0db76/_compresseds/24d9180b-aefe-4a3a-90dc-8c097d9a5f2c.jpg') center center / cover no-repeat #dff0f4; text-size-adjust: 100%; border-top: 0px; border-bottom: 0px; padding-top: 80px; padding-bottom: 90px; height: 284px;"
                                    align="center" valign="top">
                                    <span style="background-color: #eae2b7;">
                                        <!-- [if (gte mso 9)|(IE)]>
									<table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
									<tr>
									<td align="center" valign="top" width="600" style="width:600px;">
									<![endif]-->
                                    </span>
                                    <table class="templateContainer"
                                        style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 600px !important;"
                                        border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="headerContainer"
                                                    style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                    valign="top">
                                                    <table class="mcnTextBlock"
                                                        style="min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                        border="0" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody class="mcnTextBlockOuter">
                                                            <tr>
                                                                <td class="mcnTextBlockInner"
                                                                    style="padding-top: 9px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                    valign="top">
                                                                    <!-- [if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->
                                                                    <!-- [if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                                                                    <table class="mcnTextContentContainer"
                                                                        style="max-width: 100%; min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                        border="0" width="100%" cellspacing="0"
                                                                        cellpadding="0" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="mcnTextContent"
                                                                                    style="text-size-adjust: 100%; word-break: break-word; font-size: 18px; line-height: 150%; text-align: left; padding: 0px 18px 9px;"
                                                                                    valign="top">
                                                                                    <h1
                                                                                        style="display: block; margin: 0px; padding: 0px; font-size: 30px; font-style: normal; font-weight: normal; line-height: 125%; letter-spacing: normal; text-align: left;">
                                                                                        <span
                                                                                            style="color: #003049; font-family: open sans, helvetica neue, helvetica, arial, sans-serif;">Welcome
                                                                                            to the
                                                                                            <br>AEC Coding Club
                                                                                        </span>
                                                                                    </h1>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!-- [if mso]>
				</td>
				<![endif]-->
                                                                    <!-- [if mso]>
				</tr>
				</table>
				<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="mcnTextBlock"
                                                        style="min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                        border="0" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody class="mcnTextBlockOuter">
                                                            <tr>
                                                                <td class="mcnTextBlockInner"
                                                                    style="padding-top: 9px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                    valign="top">
                                                                    <!-- [if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->
                                                                    <!-- [if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                                                                    <table class="mcnTextContentContainer"
                                                                        style="max-width: 100%; min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                        border="0" width="100%" cellspacing="0"
                                                                        cellpadding="0" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="mcnTextContent"
                                                                                    style="padding: 0px 18px 9px; line-height: 100%; text-size-adjust: 100%; word-break: break-word; font-family: Helvetica; text-align: left;"
                                                                                    valign="top">The OTP for your Email
                                                                                    Verification is
                                                                                    <br>
                                                                                    <br>
                                                                                    <span
                                                                                        style="font-family: 'trebuchet ms', geneva, sans-serif; color: #000; background-color: #3366ff;">
                                                                                        <strong>
                                                                                            <span
                                                                                                style="font-size: 18pt; background-color: #EAE2B7;">${otp}&nbsp;</span>
                                                                                        </strong>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!-- [if mso]>
				</td>
				<![endif]-->
                                                                    <!-- [if mso]>
				</tr>
				</table>
				<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="mcnDividerBlock"
                                                        style="min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; table-layout: fixed !important;"
                                                        border="0" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody class="mcnDividerBlockOuter">
                                                            <tr>
                                                                <td class="mcnDividerBlockInner"
                                                                    style="min-width: 100%; padding: 18px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                                                    <table class="mcnDividerContent"
                                                                        style="min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                        border="0" width="100%" cellspacing="0"
                                                                        cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                                                                    &nbsp;</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--            
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="mcnButtonBlock"
                                                        style="min-width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                        border="0" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody class="mcnButtonBlockOuter">
                                                            <tr>
                                                                <td class="mcnButtonBlockInner"
                                                                    style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 18px 18px 18px;"
                                                                    align="left" valign="top">
                                                                    <table class="mcnButtonContentContainer"
                                                                        style="border-collapse: separate !important; border-radius: 5px; background-color: #04c73b; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                        border="0" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="mcnButtonContent"
                                                                                    style="font-family: Arial; font-size: 16px; padding: 15px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                                    align="center" valign="middle">
                                                                                    <a class="mcnButton "
<<<<<<< HEAD
=======
                                                                                        title="     Try Aeon for FREE      "
>>>>>>> 4f5ab96ab932b79ecb53bdbd1b696ed2d3a099d5
                                                                                        href="http://localhost:3000/verify"
                                                                                        target="_blank"
                                                                                        style="font-weight: bold; letter-spacing: 1px; line-height: 100%; text-align: center; text-decoration: none; color: #ffffff; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: block;"
                                                                                        rel="noopener noreferrer">Click here to
                                                                                        Verify</a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</center>`, // html body
  });

  return info;
}

module.exports = sendOTP;
