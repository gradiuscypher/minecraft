var overviewerConfig = {
    "CONST": {
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "last_rendertime": 1594551548,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "imgextension": "png",
            "zoomLevels": 9,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "north_direction": 0,
            "maxZoom": 9,
            "world": "Core01",
            "poititle": "Markers",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1594551845",
        "controls": {
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true
        },
        "debug": true
    }
};
