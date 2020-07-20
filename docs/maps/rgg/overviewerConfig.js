var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "path": "day",
            "maxZoom": 8,
            "defaultZoom": 1,
            "imgextension": "png",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "minZoom": 0,
            "isOverlay": false,
            "last_rendertime": 1595256979,
            "world": "world",
            "poititle": "Markers",
            "name": "Daytime Render"
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595257359",
        "debug": true
    }
};
