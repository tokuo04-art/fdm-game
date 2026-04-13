
const Model = {
    x: 100,
    v: 2
};

const Subscribers = [];

function subscribe(f){
    Subscribers.push(f);
}

function publish(){
    Subscribers.forEach(f => f(Model));
}

function update(){
    Model.x += Model.v;

    if(Model.x > 300 || Model.x < 0)
        Model.v *= -1;

    publish();
}

setInterval(update,16);
