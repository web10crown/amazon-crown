const FurnitureVideo = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
                style={{ width: "100%",objectFit:"cover" }}
                src="/banners/cosmetic.jpg"
                
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
export default FurnitureVideo;