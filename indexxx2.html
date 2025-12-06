<!DOCTYPE html>
<html>
<head>
  <title>Take Image</title>
  <style>
    body { font-family: Arial; background: #f5f5f5; padding: 20px; text-align: center; }
    .box { background: white; padding: 20px; width: 320px; margin: auto; border-radius: 10px; }
    video, img { width: 300px; border-radius: 10px; }
    button { padding: 10px 20px; margin-top: 10px; border: none; background: #007bff; color: white; border-radius: 6px; cursor: pointer; }
    button:hover { background: #0056c7; }
  </style>
</head>
<body>

<h1>Take Image</h1>

<div class="box">
  <h3>Your Saved Image</h3>
  <img id="savedImg" src="">
</div>

<br>

<div class="box">
  <h3>Live Camera</h3>
  <video id="video" autoplay playsinline></video><br>
  <button id="captureBtn">Take & Save Image</button><br>
  <button onclick="logout()">Logout</button>
</div>

<canvas id="canvas" style="display:none;"></canvas>

<script>
  const params = new URLSearchParams(window.location.search);
  const user = params.get("user");

  if (!user) window.location.href = "index.html";

  // Load user data
  const userData = JSON.parse(localStorage.getItem("user_" + user));

  // Show saved image if exists
  if (userData.image) {
    document.getElementById("savedImg").src = userData.image;
  } else {
    document.getElementById("savedImg").src = "";
  }

  // Start camera
  const video = document.getElementById("video");
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(err => alert("Camera error: " + err));

  // Capture and save
  document.getElementById("captureBtn").addEventListener("click", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    const imgData = canvas.toDataURL("image/png");

    // Save ONLY in localStorage, not in phone/laptop
    userData.image = imgData;
    localStorage.setItem("user_" + user, JSON.stringify(userData));

    document.getElementById("savedImg").src = imgData;

    alert("Image saved inside app (not in device).");
  });

  function logout() {
    window.location.href = "index.html";
  }
</script>

</body>
</html>
