var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "minZoom": 0,
            "maxZoom": 10,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "last_rendertime": 1599242280,
            "showlocationmarker": true,
            "north_direction": 0,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "isOverlay": false
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "zoom": true
        },
        "cacheTag": "1599242486"
    }
};
