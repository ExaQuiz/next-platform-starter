export default function Page() {
  return (
    <div className="container">
      <h1>🎥 ExaTenge AI</h1>
      <input type="file" className="input-box" accept="video/*" />
      <button className="btn primary">Upload & Convert</button>
      <p className="notice">⚠ You will get only a 1-minute preview</p>

      <div className="video-preview" style={{ display: 'none' }} id="previewSection">
        <video id="previewVideo" controls></video>
      </div>

      <button className="btn secondary" id="payBtn" style={{ display: 'none' }}>
        Pay ₹99 to Unlock Full Video
      </button>

      <a
        id="downloadLink"
        href="#"
        download
        className="btn primary"
        style={{ display: 'none' }}
      >
        ⬇ Download Full Video
      </a>
    </div>
  );
}
