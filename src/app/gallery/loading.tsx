import Loader from '../components/Loader';

export default function Loading() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.3)',
                zIndex: 9999,
            }}
        >
            <Loader />
            <h2 style={{ marginTop: '20px', color: '#242323ff' }}>
                Connecting to the database...
            </h2>
        </div>
    );
}
