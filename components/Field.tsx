import { motion } from "framer-motion";
import React, {FC, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionsPlayer} from "../data/positionsPlayerData";

const Field: FC = () => {
	const [positionPlayer1, setPositionPlayer1] = useState<number>(0)
	const [targetPositionPlayer1, setTargetPositionPlayer1] = useState<number>(0)
	const [positionPlayer2, setPositionPlayer2] = useState<number>(0)
	const [positionPlayer3, setPositionPlayer3] = useState<number>(0)
	const [positionPlayer4, setPositionPlayer4] = useState<number>(0)

	const getPositionPlayer: Function = () => {

	}

	const motionPlayer: Function = (
		positionsPlayer: number[],
		positionPlayer: number,
		setPositionPlayer: Function,
		currentMotions: number
	) => {
		if (positionPlayer1 < 31) {
			setPositionPlayer(positionPlayer + 1)
		} else {
			setPositionPlayer(0)
		}
	}

	const transitionMotion = {
		duration: .3,
		type: 'tween'
	}

	const cells = [
		'1', '2', '3', '4', '5', '6', '7'
	]

	return (
		<div className={style.field}>
			<div
				onClick={() => {
					setPositionPlayer1((positionPlayer1 + 1) % 32)
					setTargetPositionPlayer1((positionPlayer1 + 2) % 32)
				}}
				className={style.startCell}>

			</div>
			<div className={style.prisonCell}>
				Тюрьма
			</div>
			<div className={style.coinCell}>
				Монета
			</div>
			<div className={style.policeCell}>
				Коп
			</div>


			<div className={style.fieldLine1}>
				{cells.map((value, index) => {
					return	<div className={style.cell}>{index}</div>
				})}
			</div>

			<div className={style.fieldLine2}>
				{cells.map((value, index) => {
					return	<div className={style.cell}>{index}</div>
				})}
			</div>

			<div className={style.fieldLine3}>
				{cells.map((value, index) => {
					return	<div className={style.cell}>{index}</div>
				})}
			</div>

			<div className={style.fieldLine4}>
				{cells.map((value, index) => {
					return	<div className={style.cell}>{index}</div>
				})}
			</div>

			<motion.div
				animate={positionsPlayer[positionPlayer1]}
				onAnimationComplete={() => {
					if (targetPositionPlayer1 !== positionPlayer1) {
						if (positionPlayer1 < 31) {
							setPositionPlayer1(positionPlayer1 + 1)
						} else {
							setPositionPlayer1(0)
						}
					}
					console.log(positionPlayer1, targetPositionPlayer1)
				}}
				transition={transitionMotion}
				className={style.player}>

			</motion.div>
			<motion.div
				animate={positionsPlayer[positionPlayer2]}
				transition={transitionMotion}
				className={style.player}>

			</motion.div>
		</div>
	)
}

export default React.memo(Field)