var overviewerConfig = {
    "CONST": {
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "showlocationmarker": true,
            "minZoom": 0,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "zoomLevels": 10,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "defaultZoom": 1,
            "poititle": "Markers",
            "isOverlay": false,
            "last_rendertime": 1597726680
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "pan": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597726885"
    }
};
