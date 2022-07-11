import { getWordsList } from '../constants/wordlist'

export const MAX_WORD_LENGTH = getWordsList()[0].length
export const MAX_CHALLENGES = 6
export const ALERT_TIME_MS = 2000
export const REVEAL_TIME_MS = 0
export const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS
export const WELCOME_INFO_MODAL_MS = 350
