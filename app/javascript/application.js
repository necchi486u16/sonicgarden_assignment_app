// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

import { Application } from "@hotwired/stimulus";
import ConfirmationController from "./controllers/confirmation_controller";

export const application = Application.start(document.documentElement);
application.register("confirmation", ConfirmationController);
import "controllers"
