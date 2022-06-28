import { ApiService } from "./core/api.service";
import { ConfigService } from "./core/config.service";

export function initApiFactory(
    apiService: ApiService,
    configService: ConfigService
) {
    return async () => {
        console.log('initServicesFactory - started');
        await apiService.connect(configService.url);
        console.log('initServicesFactory - completed');
    };
}