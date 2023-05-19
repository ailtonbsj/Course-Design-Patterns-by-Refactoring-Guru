package br.ailtonbsj.logistics.service;

import org.springframework.stereotype.Service;

import br.ailtonbsj.logistics.model.Ship;

@Service
public class SeaLogistics extends Logistics {

    @Override
    public Ship createTransport() {
        return new Ship();
    }
    
}
