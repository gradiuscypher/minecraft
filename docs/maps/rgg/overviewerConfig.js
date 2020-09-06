var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "isOverlay": false,
            "path": "day",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1599350179,
            "defaultZoom": 1,
            "minZoom": 0,
            "base": "",
            "maxZoom": 8,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "zoomLevels": 8,
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true
        },
        "debug": true,
        "cacheTag": "1599350571",
        "north_direction": "lower-left"
    }
};
