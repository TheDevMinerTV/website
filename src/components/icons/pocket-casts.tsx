import React from "react"
import type { Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

export const PocketCastsIcon: React.FC<Icon.CommonProps> = ({
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("fill-current", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128 20C187.65 20 236 68.3503 236 128C236 187.65 187.65 236 128 236C68.3503 236 20 187.65 20 128C20 68.3503 68.3503 20 128 20ZM128 211.997C81.6072 211.997 44.003 174.393 44.003 128C44.003 81.6072 81.6072 44.003 128 44.003V64.9955C115.541 64.9955 103.361 68.6901 93.001 75.6121C82.6412 82.5341 74.5667 92.3726 69.7983 103.883C65.03 115.394 63.782 128.061 66.2122 140.281C68.6425 152.501 74.6418 163.726 83.4515 172.537C92.2612 181.348 103.486 187.348 115.706 189.78C127.926 192.211 140.592 190.965 152.104 186.198C163.615 181.43 173.454 173.357 180.377 162.998C187.301 152.639 190.996 140.459 190.998 128H211.997C211.997 174.4 174.393 211.997 128 211.997ZM77.5977 128C77.5977 114.632 82.908 101.812 92.3602 92.3602C101.812 82.908 114.632 77.5978 128 77.5978V95.924C121.658 95.9253 115.459 97.8071 110.186 101.331C104.913 104.856 100.804 109.864 98.3773 115.724C95.9509 121.584 95.3164 128.031 96.554 134.251C97.7916 140.471 100.846 146.185 105.33 150.67C109.815 155.154 115.529 158.208 121.749 159.446C127.969 160.684 134.416 160.049 140.276 157.623C146.136 155.196 151.144 151.087 154.669 145.814C158.193 140.541 160.075 134.342 160.076 128H178.402C178.402 141.368 173.092 154.188 163.64 163.64C154.188 173.092 141.368 178.402 128 178.402C114.632 178.402 101.812 173.092 92.3602 163.64C82.908 154.188 77.5977 141.368 77.5977 128Z"
      />
    </svg>
  )
}

PocketCastsIcon.displayName = "PocketCastsIcon"