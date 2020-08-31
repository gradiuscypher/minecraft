var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "isOverlay": false,
            "maxZoom": 10,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0,
            "zoomLevels": 10,
            "imgextension": "png",
            "north_direction": 0,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "last_rendertime": 1598914680,
            "bgcolor": "#1a1a1a",
            "path": "day"
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598914887"
    }
};
