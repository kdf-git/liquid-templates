function copyURLCustom() {
  var copyText = document.getElementById("share-cart-link-custom");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  var copyButton = document.getElementById("share-cart-button-custom");
  copyButton.textContent = "Copied!";
  const timeout = setTimeout(() => {
    copyButton.textContent = "Share Cart";
  }, 2000);
}
