var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "poititle": "Markers",
            "base": "",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597715880,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "defaultZoom": 1,
            "maxZoom": 10,
            "world": "Core01",
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "north_direction": 0,
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597716083"
    }
};
