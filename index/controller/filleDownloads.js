const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

function downloadFile(req, res) {
    const fileUrl = req.query.url; // Assuming the file URL is passed as a query parameter
    const fileName = path.basename(fileUrl);
    const destinationPath = path.join(__dirname, '../downloads', fileName);
  
    const protocol = fileUrl.startsWith('https') ? https : http;
  
    protocol.get(fileUrl, response => {
      if (response.statusCode !== 200) {
        return res.status(response.statusCode).json({ error: 'Failed to download file' });
      }
  
      const fileStream = fs.createWriteStream(destinationPath);
      response.pipe(fileStream);
  
      fileStream.on('finish', () => {
        fileStream.close();
        res.json({ message: 'File downloaded successfully' });
      });
  
      fileStream.on('error', error => {
        fs.unlink(destinationPath, () => {}); // Delete the file if an error occurs
        res.status(500).json({ error: 'Error downloading file' });
      });
    }).on('error', error => {
      res.status(500).json({ error: 'Error downloading file' });
    });
  }

  module.exports = {
    downloadFile
  };
  