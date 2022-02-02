"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
            try {
                res.sendStatus(200);
            }
            catch (error) {
                next(error);
            }
        };
        this.mainView = (req, res) => {
            res.status(200).send('node express index');
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map