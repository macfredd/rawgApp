import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const addApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setParams: {
      key: environment.apiKey,
    },
  });

  return next(req);
};
