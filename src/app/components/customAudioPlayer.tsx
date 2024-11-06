import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface CustomAudioPlayerProps {
	audioLink: string;
	audioTrans: string;
	onAudioEnd: () => void;
	opacity: string; // Callback function to be called when audio ends
}

export default function CustomAudioPlayer({
	audioLink,
	audioTrans,
	onAudioEnd,
	opacity,
}: CustomAudioPlayerProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null); // Nullable type
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isMuted, setIsMuted] = useState(false);
	const [autoplayBlocked, setAutoplayBlocked] = useState(false);

	// Auto-play the audio when the component is rendered
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleCanPlayThrough = async () => {
			try {
				await audio.play();
				setIsPlaying(true);
			} catch (error) {
				setAutoplayBlocked(true);
				console.warn("User gesture needed to start playback.");
			}
		};

		audio.addEventListener("canplaythrough", handleCanPlayThrough);

		return () => {
			audio.removeEventListener("canplaythrough", handleCanPlayThrough);
		};
	}, []);

	// Add event listener for audio end
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleAudioEnd = () => {
			setIsPlaying(false);
			onAudioEnd(); // Call the callback function
		};

		audio.addEventListener("ended", handleAudioEnd);

		return () => {
			audio.removeEventListener("ended", handleAudioEnd);
		};
	}, [onAudioEnd]);

	const togglePlayPause = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else {
			audio.play().catch(() => {
				console.warn("User gesture needed to start playback.");
			});
			setIsPlaying(true);
			setAutoplayBlocked(false); // Clear any autoplay block if user starts manually
		}
	};

	// Update seek bar and current time as audio plays
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
		};
	}, []);

	// Seek functionality
	const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = (Number(event.target.value) / 100) * duration;
		if (audioRef.current) {
			audioRef.current.currentTime = newTime;
		}
		setCurrentTime(newTime);
	};

	// Mute/Unmute functionality
	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
		}
		setIsMuted(!isMuted);
	};

	// Volume control
	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(event.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
		setVolume(newVolume);
	};

	return (
		<div
			className={` ${opacity === "audio" ? "opacity-100" : "opacity-0"} relative w-full h-full lg:row-start-9 lg:col-span-7 backdrop-blur-sm lg:col-start-2 row-start-8 col-start-2 z-[100] row-span-1 col-span-8 flex items-center rounded-t-none p-4 rounded-lg shadow-lg space-x-4`}
		>
			{/* Play/Pause Button */}
			{autoplayBlocked && (
				<button
					className="w-full h-full absolute flex justify-center items-center invert top-0 left-0 rounded-b-lg text-3xl"
					type="button"
					onClick={togglePlayPause}
				>
					<Image
						src="/icons/playButton.png"
						alt="play"
						width={48}
						height={48}
					/>
				</button>
			)}
			{!autoplayBlocked && (
				<>
					<button
						type="button"
						onClick={togglePlayPause}
						className="text-white text-4xl invert"
					>
						{isPlaying ? (
							<Image
								src="/icons/pauseButton.png"
								alt="pause"
								width={48}
								height={48}
							/>
						) : (
							<Image
								src="/icons/playButton.png"
								alt="play"
								width={48}
								height={48}
							/>
						)}
					</button>

					{/* Seek Bar */}
					<input
						type="range"
						min="0"
						max="100"
						value={(currentTime / duration) * 100 || 0}
						onChange={handleSeek}
						className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"
					/>

					{/* Volume Control */}
					<input
						type="range"
						min="0"
						max="1"
						step="0.1"
						value={volume}
						onChange={handleVolumeChange}
						className="w-20 h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"
					/>

					{/* Mute Button */}
					<button
						type="button"
						onClick={toggleMute}
						className="text-white text-4xl invert"
					>
						{isMuted ? (
							<Image
								src="/icons/muted.png"
								alt="muted"
								width={48}
								height={48}
							/>
						) : (
							<Image
								src="/icons/sound.png"
								alt="un-muted"
								width={48}
								height={48}
							/>
						)}
					</button>
				</>
			)}

			{/* Hidden Audio Element */}
			<audio ref={audioRef} src={audioLink}>
				<track kind="captions" src={audioTrans} />
			</audio>
		</div>
	);
}
