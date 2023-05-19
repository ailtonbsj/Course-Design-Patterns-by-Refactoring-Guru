package br.ailtonbsj.logistics.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ailtonbsj.logistics.service.RoadLogistics;
import br.ailtonbsj.logistics.service.SeaLogistics;

@RestController
@RequestMapping("/")
public class Logistics {

    @Autowired
    RoadLogistics roadLogistics;

    @Autowired
    SeaLogistics seaLogistics;

    @GetMapping
    public String home() {
        return roadLogistics.planDelivery() + " " + seaLogistics.planDelivery();
    }
    
}
