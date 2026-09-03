/*
 * ============================================
 * Author: #qhuyy
 * Script: Alight Motion Member Unlocker
 * ============================================
 */

const url = $request.url;

if (url.includes("getAccountStatusAndLicenses")) {
  let body = {};
  try {
    body = JSON.parse($response.body || "{}");
  } catch (e) {
    body = {};
  }
  
  body.result = body.result || {};
  body.result.licenses = [
    {
      "type": "ALIGHT_MOTION_MEMBER",
      "status": "ACTIVE",
      "expiresMs": "4102444800000" // Hạn sử dụng đến năm 2100
    }
  ];
  body.result.accountType = "PAID";
  
  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
