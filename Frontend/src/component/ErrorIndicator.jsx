import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
export default function ErrorIndicator(){
    return <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Your browser is outdated!</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  </Alert>
}