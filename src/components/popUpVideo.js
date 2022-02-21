import React, { useEffect } from "react";
import ModalVideo from "react-modal-video";
import PropTypes from "prop-types";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const PopUpVideo = ({ channel, open, videoId, autoPlay, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div>
      <ModalVideo
        channel={channel}
        autoplay={autoPlay}
        isOpen={open}
        videoId={videoId}
        onClose={onClose}
      />
    </div>
  );
};

PopUpVideo.defaultProps = {
  autoPlay: true,
};

PopUpVideo.propTypes = {
  channel: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default PopUpVideo;
