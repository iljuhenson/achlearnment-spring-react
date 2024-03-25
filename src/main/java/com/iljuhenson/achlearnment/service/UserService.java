package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.AuthenticationRequestDO;
import com.iljuhenson.achlearnment.service.DO.AuthenticationResponseDO;
import com.iljuhenson.achlearnment.service.DO.RegisterRequestDO;

public interface UserService {
    AuthenticationResponseDO register(RegisterRequestDO request);

    AuthenticationResponseDO authenticate(AuthenticationRequestDO request);
    // TODO: authentication, registration, settings
    void save(User user);

}
