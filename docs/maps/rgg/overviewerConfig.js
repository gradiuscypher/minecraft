var overviewerConfig = {
    "map": {
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595952164",
        "debug": true
    },
    "tilesets": [
        {
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "north_direction": 0,
            "isOverlay": false,
            "base": "",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595951779,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "maxZoom": 8,
            "defaultZoom": 1,
            "poititle": "Markers",
            "world": "world",
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    }
};
