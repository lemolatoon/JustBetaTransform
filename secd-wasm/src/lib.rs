use secd_machine::{LambdaExpression, SECDMachine};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn try_parse(input: &str) -> Result<String, String> {
    let expr = LambdaExpression::parse(input).map_err(|e| format!("{:?}", e))?;
    Ok(format!("{}", expr))
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct BetaReductionResult {
    expr: String,
    log: String,
}

#[wasm_bindgen]
impl BetaReductionResult {
    pub fn expr(&self) -> String {
        self.expr.clone()
    }

    pub fn log(&self) -> String {
        self.log.clone()
    }
}

#[wasm_bindgen]
pub fn beta_transform(input: &str) -> Result<BetaReductionResult, String> {
    let expr = LambdaExpression::parse(input).map_err(|e| format!("{:?}", e))?;
    let (expr, log) = SECDMachine::beta_reduction_with_body_simplification(expr)
        .map_err(|e| format!("{:?}", e))?;
    Ok(BetaReductionResult {
        expr: format!("{}", expr),
        log,
    })
}
