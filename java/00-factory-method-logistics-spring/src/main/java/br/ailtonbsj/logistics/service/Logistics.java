package br.ailtonbsj.logistics.service;

import br.ailtonbsj.logistics.model.Transport;

public abstract class Logistics {

    abstract Transport createTransport();

    public String planDelivery() {
        Transport t = createTransport();
        return t.deliver();
    }

}
