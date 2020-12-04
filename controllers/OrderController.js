import Order from '../models/order';

export function getOrders(req, res) {
    try {
        Order.find({}, (err, orders) => {
            if (err) return res.status(404).send({ error: err });
            res.status(200).send(orders);
        });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
}

export function getOrder(req, res) {
    
}

export async function postOrder(req, res) {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save(err => {
            if (err) return res.status(400).send({ error: err });
            res.status(201).send(newOrder);
        });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
}

export function putOrder(req, res) {
    
}

export function deleteOrder(req, res) {
    
}
