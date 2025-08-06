package com.maddrones.plugins.libzt;

import com.getcapacitor.Logger;

public class LibztPlugin {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
