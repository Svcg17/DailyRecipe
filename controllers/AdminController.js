import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../models/admin';
import Policy from '../models/policy';

export function getPolicy(req, res) {
    Policy.find({}, (err, policy) => {
        if (err) return res.status(404).send({ error: err });
        res.status(200).send(policy);
    });
}

export async function updatePolicy(req, res) {
    const policyExists = await Policy.find({});
    if (policyExists.length) {
        try {
            const updatePolicy = await Policy.findOneAndReplace({}, req.body, { new: true });
            await updatePolicy.save();
            res.status(200).send(updatePolicy);
        } catch (err) {
            res.status(400).send({ error: err });
        }
    } else {
        try {
            const newPolicy = new Policy(req.body);
            await newPolicy.save();
            res.status(200).send(newPolicy);
        } catch (err) {
            res.status(400).send({ error: err });
        }
    }
}
