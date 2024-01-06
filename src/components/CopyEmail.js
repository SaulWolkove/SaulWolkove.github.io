const CopyToClipboardIcon = ({ textToCopy }) => {
  const handleCopyToClipboard = () => {
    // Create a textarea element to hold the text
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the text in the textarea
    textArea.select();

    try {
      // Attempt to copy the text to the clipboard
      document.execCommand('copy');
      console.log('Text copied to clipboard:', textToCopy);
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }

    // Remove the temporary textarea
    document.body.removeChild(textArea);
  };
}
