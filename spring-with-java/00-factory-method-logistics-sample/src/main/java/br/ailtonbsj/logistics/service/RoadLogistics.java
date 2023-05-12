package br.ailtonbsj.logistics.service;

import org.springframework.stereotype.Service;

import br.ailtonbsj.logistics.model.Truck;

@Service
public class RoadLogistics extends Logistics {

    @Override
    public Truck createTransport() {
        return new Truck();
    }
}
