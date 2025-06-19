import React from "react";


function VideoSection() {
  return (
    <section className="video-section">
     <h2>
  <span className="underline-red">Améliorez</span> la qualité de votre travail
</h2>
      <div className="video-container">
        <video controls>
          <source src="/../images/POFINE.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
