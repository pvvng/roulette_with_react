import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export default function captureAndSaveScreenshot() {
    // 화면 전체를 캡처합니다.
    html2canvas(document.body).then(function(canvas) {
      // 캡처된 캔버스를 이미지로 변환합니다.
      canvas.toBlob(function(blob) {
        // Blob을 파일로 저장합니다.
        saveAs(blob, 'screenshot.png');
      });
    });
  }