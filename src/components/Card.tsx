import type { CardProps } from "../types";

export function Card({ title, src }: CardProps) {
    return (
        <div className="flex m-[-2]">
            <div className="m-1">
                <img src={src} alt={title} width={400} height={120} />
            </div>
        </div>
    )
}