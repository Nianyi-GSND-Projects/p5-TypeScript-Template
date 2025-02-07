import './p5.mts';
import { WaitUntil } from './utils.mts';

export class App {

	/* Construction and initialization */
	//#region

	#$settings: HTMLFormElement;
	#ready: boolean = false;
	#invalidated: boolean = true;

	async Initialize() {
		// TODO
		this.#SetupUi();
		this.#ready = true;
	}

	#SetupUi() {
		this.#$settings = document.forms['settings'];
		// TODO
	}

	//#endregion

	/* Life cycle */
	//#region

	async Start() {
		await WaitUntil(() => this.#ready);
		createCanvas(1, 1);
		// TODO
	}

	StepFrame() {
		if(!this.#ready)
			return;
		if(this.#invalidated) {
			this.Draw();
			this.#invalidated = false;
		}
	}

	//#endregion

	/* Drawing */
	//#region

	Draw() {
		// TODO
	}

	//#endregion
}

export default App;