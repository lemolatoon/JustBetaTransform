use wasm_bindgen::prelude::*;
use secd_machine::{LambdaExpression, SECDMachine};

#[wasm_bindgen]
pub fn try_parse(input: &str) -> Result<String, String> {
    let expr = LambdaExpression::parse(input).map_err(|e| format!("{:?}", e))?;
    Ok(format!("{}", expr))
}


#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct BetaTransformResult {
    expr: String,
    log: String,
}

#[wasm_bindgen]
pub fn beta_transform(input: &str) -> Result<BetaTransformResult, String> {
    let expr = LambdaExpression::parse(input).map_err(|e| format!("{:?}", e))?;
    let mut log = String::new();
    let expr = SECDMachine::beta_transform_with_log(expr, &mut log).map_err(|e| format!("{:?}", e))?;
    Ok(BetaTransformResult { expr: format!("{}", expr), log })
}