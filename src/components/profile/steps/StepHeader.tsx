import { Check } from "lucide-react";

const StepHeader = ({ step = 0 }: { step: number }) => {
    return (
        <nav className="flex items-center justify-center mb-10">
            <ol className="flex items-center space-x-2">
                <li
                    className={`flex items-center ${
                        step >= 0 ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full border border-current">
                        {step > 0 ? (
                            <Check className="h-5 w-5 text-green-600" />
                        ) : (
                            "1"
                        )}
                    </span>
                    <span className="ml-2">Basic Info</span>
                </li>
                <li className="flex items-center">
                    <div className="w-12 h-px bg-muted-foreground mx-2" />
                </li>
                <li
                    className={`flex items-center ${
                        step === 1 ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full border border-current">
                        2
                    </span>
                    <span className="ml-2">Additional Info</span>
                </li>
            </ol>
        </nav>
    );
};

export default StepHeader;
