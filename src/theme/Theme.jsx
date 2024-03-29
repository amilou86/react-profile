import Modal from "../components/Modal"
import './theme.css'
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './BackgroundColor'

const primaryColors = [
    { className: 'color-1' },
    { className: 'color-2' },
    { className: 'color-3' },
    { className: 'color-4' },
    { className: 'color-5' },
    { className: 'color-6' }
]

const backgroundColors = [
    { className: 'bg-1' },
    { className: 'bg-2' }
]

const Theme = () => {
    return (
        <Modal className="theme-modal">
            <h3>Customize Your Theme</h3>
            <small>Change the primary and background color to your preference.</small>
            <div className="theme-primary-wrapper">
                <h5>Primary Color</h5>
                <div className="theme-primary-colors">
                    {
                        primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className} />)
                    }
                </div>
            </div>
            <div className="theme-background-wrapper">
                <h5>Background Color</h5>
                <div className="theme-background-colors">
                    {
                        backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                    }

                </div>
            </div>
        </Modal >
    )
}

export default Theme

