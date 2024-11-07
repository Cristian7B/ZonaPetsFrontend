export function ProgressBar({value}) {
    return (
        <div className="progressGeneralBarContainer">
            <progress className="progressBarForSteps" value={value} max="100"></progress>
        </div>
    )
}