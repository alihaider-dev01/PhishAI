function checkURL() {
  const url = document.getElementById("urlInput").value.trim();

  if (!url) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a URL to check.',
      background: '#1a1a1a',
      color: '#ff6666',
    });
    return;
  }

  // 🔍 Simple pattern-based phishing detection
  const patterns = [
    /@/,                                 // @ symbol
    /^http:\/\//,                        // no HTTPS
    /login|verify|account|update/i,      // keywords
    /-\w+\./,                            // hyphen in domain
    /\d{1,3}(\.\d{1,3}){3}/,             // IP address instead of domain
    /\.zip$/,                            // malicious file links
    /(free|bonus|prize|gift)/i           // suspicious bait words
  ];

  let isPhishing = false;
  for (const pattern of patterns) {
    if (pattern.test(url)) {
      isPhishing = true;
      break;
    }
  }

  // 🧠 Result popup
  if (isPhishing) {
    Swal.fire({
      icon: 'warning',
      title: '🚨 Suspicious URL Detected!',
      text: 'This link matches phishing patterns. Stay alert!',
      background: '#1a1a1a',
      color: '#ff4d4d',
      confirmButtonColor: '#ff3333',
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: '✅ Safe URL',
      text: 'Looks clean! But always be cautious online.',
      background: '#1a1a1a',
      color: '#00ffcc',
      confirmButtonColor: '#00ffcc',
    });
  }
}
