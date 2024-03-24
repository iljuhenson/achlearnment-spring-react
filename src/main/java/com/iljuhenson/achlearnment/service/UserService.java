package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.controller.DO.AuthenticationRequestDO;
import com.iljuhenson.achlearnment.controller.DO.AuthenticationResponseDO;
import com.iljuhenson.achlearnment.controller.DO.RegisterRequestDO;

public interface UserService {
    AuthenticationResponseDO register(RegisterRequestDO request);

    AuthenticationResponseDO authenticate(AuthenticationRequestDO request);
    // TODO: authentication, registration, settings

}
