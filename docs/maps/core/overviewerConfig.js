var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0,
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "base": "",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "last_rendertime": 1597463880,
            "maxZoom": 10,
            "imgextension": "png"
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "spawn": true
        },
        "cacheTag": "1597464082",
        "north_direction": "lower-left",
        "debug": true
    }
};
