const Lipstick = () => {
    return (
        <div style={{ position: 'relative', maxHeight: "60vh", overflow: 'hidden' }}>
            <video
                style={{ width: "100%" }}
                src="/videos/2nd.mp4"
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
                fontWeight: 'bold',
                
                textAlign: 'center',
            }}>
               
            </div>
        </div>
    )
}
export default Lipstick;