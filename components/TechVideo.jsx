const TechVideo = () => {
    return (
        <div style={{ position: 'relative', maxHeight: "60vh", overflow: 'hidden' }}>
            <video
                style={{ width: "100%",minHeight:"40vh",objectFit:"cover" }}
                src="/videos/1st.mp4"
                autoPlay
                loop
                muted
            />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '3rem',
                textAlign: 'center',
            }}>
                
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: '3vw', // Adjust font size dynamically
                    letterSpacing:"5px",
                    textAlign: 'center',
                    whiteSpace: 'nowrap', // Prevents text wrapping
                }}>
                   WHERE QUALITY MEETS CONVENIENCE
                </div>
            </div>
        </div>
    )
}
export default TechVideo;